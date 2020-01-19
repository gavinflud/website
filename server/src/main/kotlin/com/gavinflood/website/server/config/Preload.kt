package com.gavinflood.website.server.config

import com.gavinflood.website.server.domain.SiteUser
import com.gavinflood.website.server.repository.SiteUserRepository
import org.springframework.context.ApplicationListener
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

@Component
class Preload(private val siteUserRepository: SiteUserRepository,
              private val passwordEncoder: PasswordEncoder): ApplicationListener<ContextRefreshedEvent> {

    private var hasPreloadAlreadyCompleted = false

    override fun onApplicationEvent(event: ContextRefreshedEvent) {
        if (!hasPreloadAlreadyCompleted && !hasPreloadAlreadyCompleted()) {
            createUser("Gavin", "Flood", "gavinflood", "password")
            hasPreloadAlreadyCompleted = true
        }
    }

    private fun hasPreloadAlreadyCompleted(): Boolean {
        return siteUserRepository.findAll().count() > 0
    }

    private fun createUser(firstName: String, lastName: String, username: String, password: String) {
        val user = SiteUser(firstName, lastName, username, passwordEncoder.encode(password))
        siteUserRepository.save(user)
    }

}