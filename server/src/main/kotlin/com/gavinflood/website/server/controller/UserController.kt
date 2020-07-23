package com.gavinflood.website.server.controller

import com.gavinflood.website.server.domain.ChangePasswordDTO
import com.gavinflood.website.server.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
class UserController(private val userService: UserService) {

    @GetMapping("/current")
    fun getCurrentUser(): ResponseEntity<UserDetails> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal is UserDetails) {
            return ResponseEntity.ok(principal)
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()
    }

    @PostMapping("/current/password")
    fun changePassword(@RequestBody changePasswordDTO: ChangePasswordDTO): ResponseEntity<UserDetails> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal is UserDetails) {
            if (userService.changePassword(principal.username, changePasswordDTO.oldPassword,
                    changePasswordDTO.newPassword)) {
                return ResponseEntity.ok(principal)
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build()
    }

}