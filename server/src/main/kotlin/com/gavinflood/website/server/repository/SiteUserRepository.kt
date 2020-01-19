package com.gavinflood.website.server.repository

import com.gavinflood.website.server.domain.SiteUser
import org.springframework.data.repository.CrudRepository
import java.util.*

interface SiteUserRepository: CrudRepository<SiteUser, Long> {

    fun findDistinctByUsername(username: String): Optional<SiteUser>

}