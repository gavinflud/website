package com.gavinflood.website.server.domain

import java.text.Normalizer
import java.util.*
import java.util.regex.Pattern
import javax.persistence.Column
import javax.persistence.Entity

@Entity(name = "gf_post")
class Post(

        @Column(name = "gf_title", length = 256)
        var title: String,

        @Column(name = "gf_content", length = 10485760)
        var content: String,

        @Column(name = "gf_date")
        var date: Date,

        @Column(name = "gf_published")
        var published: Boolean

): IdentifiableEntity() {

    private val nonlatin = Pattern.compile("[^\\w-]")
    private val whitespace = Pattern.compile("[\\s]")

    @Column(name = "gf_slug")
    var slug: String = generateSlug()

    @Column(name = "gf_retired")
    var retired: Boolean = false

    private fun generateSlug(): String {
        val titleWithoutWhitespace = whitespace.matcher(title).replaceAll("-")
        val titleNormalized = Normalizer.normalize(titleWithoutWhitespace, Normalizer.Form.NFD)
        val slug = nonlatin.matcher(titleNormalized).replaceAll("")
        return slug.toLowerCase(Locale.ENGLISH)
    }

}