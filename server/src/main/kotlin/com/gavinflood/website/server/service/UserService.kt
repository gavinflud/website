package com.gavinflood.website.server.service

import com.gavinflood.website.server.repository.SiteUserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: SiteUserRepository, private val passwordEncoder: PasswordEncoder) {

    fun changePassword(username: String, oldPassword: String, newPassword: String): Boolean {
        val foundUser = userRepository.findDistinctByUsername(username)

        if (foundUser.isPresent) {
            val user = foundUser.get()
            if (passwordEncoder.matches(oldPassword, user.password)) {
                user.password = passwordEncoder.encode(newPassword)
                userRepository.save(user)
                return true
            }
        }

        return false
    }

}