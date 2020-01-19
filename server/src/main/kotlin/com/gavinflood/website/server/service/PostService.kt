package com.gavinflood.website.server.service

import com.gavinflood.website.server.domain.Post
import com.gavinflood.website.server.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service

@Service
class PostService(private val postRepository: PostRepository) {

    fun findAllPublishedPosts(pageable: Pageable): Page<Post> {
        return postRepository.findByPublishedIsTrueOrderByDateDesc(pageable)
    }

    fun findAllPosts(pageable: Pageable): Page<Post> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal is UserDetails) {
            return postRepository.findByOrderByDateDesc(pageable)
        }
        return findAllPublishedPosts(pageable)
    }

    fun findPost(slug: String): Post {
        return postRepository.findDistinctBySlug(slug)
    }

    fun createPost(post: Post): Post {
        return postRepository.save(post)
    }

}