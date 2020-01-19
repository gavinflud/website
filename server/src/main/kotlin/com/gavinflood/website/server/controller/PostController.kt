package com.gavinflood.website.server.controller

import com.gavinflood.website.server.domain.Post
import com.gavinflood.website.server.repository.PostRepository
import com.gavinflood.website.server.service.PostService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/posts")
class PostController(private val postService: PostService) {

    @GetMapping
    fun getAllPosts(pageable: Pageable): ResponseEntity<Page<Post>> {
        return ResponseEntity.ok(postService.findAllPosts(pageable))
    }

    @GetMapping("/{slug}")
    fun getPost(@PathVariable slug: String): ResponseEntity<Post> {
        return ResponseEntity.ok(postService.findPost(slug))
    }

    @PostMapping
    fun createPost(@RequestBody post: Post): ResponseEntity<Post> {
        return ResponseEntity.ok(postService.createPost(post))
    }

}