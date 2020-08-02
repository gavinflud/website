package com.gavinflood.website.server.service

import com.gavinflood.website.server.domain.WebsiteProperties
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.File
import java.security.SecureRandom
import kotlin.math.abs

@Service
class ImageService(private val websiteProperties: WebsiteProperties) {

    private val secureRandom = SecureRandom.getInstance("SHA1PRNG")

    fun upload(file: MultipartFile): String {
        val randomNum = Integer.valueOf(abs(secureRandom.nextInt())).toString()
        val directory = File(websiteProperties.imageUploadPath)
        directory.mkdirs()
        val storedFile = File(directory, "$randomNum.${file.originalFilename?.split(".")?.last()}")
        storedFile.writeBytes(file.bytes)
        return "/api/images/${storedFile.name}"
    }

    fun getFile(name: String): File {
        return File("${websiteProperties.imageUploadPath}$name")
    }

}