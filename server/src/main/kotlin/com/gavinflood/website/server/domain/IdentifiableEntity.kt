package com.gavinflood.website.server.domain

import javax.persistence.*

@MappedSuperclass
abstract class IdentifiableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gf_id")
    val id: Long = 0

}