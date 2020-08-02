package com.gavinflood.website.server.controller

import com.gavinflood.website.server.domain.ImageUploadResponse
import com.gavinflood.website.server.service.ImageService
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/images")
class ImageController(private val service: ImageService) {

    @PostMapping
    fun upload(@RequestBody file: MultipartFile): ResponseEntity<ImageUploadResponse> {
        return ResponseEntity.ok(ImageUploadResponse(service.upload(file)))
    }

    @GetMapping("/{name}")
    fun getImage(@PathVariable name: String): ResponseEntity<ByteArray> {
        val file = service.getFile(name)

        if (file.exists()) {
            val bytes = file.readBytes()
            val headers = HttpHeaders()
            if (file.extension.toLowerCase() == "jpg" || file.extension.toLowerCase() == "jpeg") {
                headers.contentType = MediaType.IMAGE_JPEG
            } else if (file.extension.toLowerCase() == "png") {
                headers.contentType = MediaType.IMAGE_PNG
            } else if (file.extension.toLowerCase() == "gif") {
                headers.contentType = MediaType.IMAGE_GIF
            }

            headers.contentLength = bytes.size.toLong()
            return ResponseEntity(bytes, headers, HttpStatus.OK)
        }

        return ResponseEntity.notFound().build()
    }

}
