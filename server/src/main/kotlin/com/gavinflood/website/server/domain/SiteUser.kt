package com.gavinflood.website.server.domain

import javax.persistence.Column
import javax.persistence.Entity

@Entity(name = "gf_site_user")
class SiteUser(

        @Column(name = "gf_first_name")
        var firstName: String,

        @Column(name = "gf_last_name")
        var lastName: String,

        @Column(name = "gf_username")
        var username: String,

        @Column(name = "gf_password")
        var password: String

): IdentifiableEntity()