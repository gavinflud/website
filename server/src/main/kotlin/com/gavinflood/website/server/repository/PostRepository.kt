package com.gavinflood.website.server.repository

import com.gavinflood.website.server.domain.Post
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface PostRepository: PagingAndSortingRepository<Post, Long> {

    fun findByOrderByDateDesc(pageable: Pageable): Page<Post>

    fun findByPublishedIsTrueAndDateIsBeforeOrderByDateDesc(date: Date, pageable: Pageable): Page<Post>

    fun findDistinctBySlug(slug: String): Post

}