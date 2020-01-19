package com.gavinflood.website.server.service

import com.gavinflood.website.server.repository.SiteUserRepository
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class SimpleUserDetailsService(private val siteUserRepository: SiteUserRepository): UserDetailsService {

    override fun loadUserByUsername(username: String): UserDetails {
        val user = siteUserRepository.findDistinctByUsername(username).orElseThrow()
        return User(user.username, user.password, mutableListOf())
    }

}