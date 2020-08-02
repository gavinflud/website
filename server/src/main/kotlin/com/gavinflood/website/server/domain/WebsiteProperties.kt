package com.gavinflood.website.server.domain

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.PropertySource

@Configuration
@PropertySource("classpath:website.properties")
class WebsiteProperties {

    @Value("\${content.image-upload-path}")
    val imageUploadPath: String = ""

}