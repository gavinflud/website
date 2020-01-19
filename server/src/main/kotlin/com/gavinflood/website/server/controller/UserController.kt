package com.gavinflood.website.server.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/users")
class UserController {

    @GetMapping("/current")
    fun getCurrentUser(): ResponseEntity<UserDetails> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal is UserDetails) {
            return ResponseEntity.ok(principal)
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()
    }

}