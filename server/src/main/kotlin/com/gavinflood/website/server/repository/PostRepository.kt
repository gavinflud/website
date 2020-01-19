package com.gavinflood.website.server.repository

import com.gavinflood.website.server.domain.Post
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.PagingAndSortingRepository

interface PostRepository: PagingAndSortingRepository<Post, Long> {

    fun findByOrderByDateDesc(pageable: Pageable): Page<Post>

    fun findByPublishedIsTrueOrderByDateDesc(pageable: Pageable): Page<Post>

    fun findDistinctBySlug(slug: String): Post

}