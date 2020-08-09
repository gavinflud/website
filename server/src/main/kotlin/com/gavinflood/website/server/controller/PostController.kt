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
        try {
            return ResponseEntity.ok(postService.findPost(slug))
        } catch (exception: Exception) {
            return ResponseEntity.notFound().build()
        }
    }

    @PostMapping
    fun createPost(@RequestBody post: Post): ResponseEntity<Post> {
        return ResponseEntity.ok(postService.createPost(post))
    }

    @PutMapping("/{slug}")
    fun updatePost(@PathVariable slug: String, @RequestBody post: Post): ResponseEntity<Post> {
        val existingPost = postService.findPost(slug)
        return ResponseEntity.ok(postService.updatePost(existingPost, post))
    }

    @DeleteMapping("/{slug}")
    fun deletePost(@PathVariable slug: String): ResponseEntity<Post> {
        val existingPost = postService.findPost(slug)
        return ResponseEntity.ok(postService.deletePost(existingPost))
    }

}