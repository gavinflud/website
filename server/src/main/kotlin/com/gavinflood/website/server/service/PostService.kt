package com.gavinflood.website.server.service

import com.gavinflood.website.server.domain.Post
import com.gavinflood.website.server.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service
import java.time.DayOfWeek
import java.util.*

@Service
class PostService(private val postRepository: PostRepository) {

    fun findAllPublishedPosts(pageable: Pageable): Page<Post> {
        val calendar = Calendar.getInstance()
        calendar.add(Calendar.DAY_OF_YEAR, 1)
        return postRepository.findByPublishedIsTrueAndRetiredIsFalseAndDateIsBeforeOrderByDateDesc(calendar.time, pageable)
    }

    fun findAllPosts(pageable: Pageable): Page<Post> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal is UserDetails) {
            return postRepository.findByRetiredIsFalseOrderByDateDesc(pageable)
        }
        return findAllPublishedPosts(pageable)
    }

    fun findPost(slug: String): Post {
        return postRepository.findDistinctBySlug(slug)
    }

    fun createPost(post: Post): Post {
        return postRepository.save(post)
    }

    fun updatePost(existingPost: Post, updatedPost: Post): Post {
        existingPost.title = updatedPost.title
        existingPost.content = updatedPost.content
        existingPost.date = updatedPost.date
        existingPost.published = updatedPost.published
        return postRepository.save(existingPost)
    }

    fun deletePost(post: Post): Post {
        post.retired = true
        return postRepository.save(post)
    }

}