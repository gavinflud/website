package com.gavinflood.website.server.config

import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler
import org.springframework.security.web.savedrequest.HttpSessionRequestCache
import org.springframework.util.StringUtils
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class RestAuthenticationSuccessHandler: SimpleUrlAuthenticationSuccessHandler() {

    private val requestCache = HttpSessionRequestCache()

    override fun onAuthenticationSuccess(request: HttpServletRequest, response: HttpServletResponse,
                                         authentication: Authentication) {
        val savedRequest = requestCache.getRequest(request, response)
        if (savedRequest == null) {
            clearAuthenticationAttributes(request)
            return
        }

        if (isAlwaysUseDefaultTargetUrl || (targetUrlParameter != null
                        && StringUtils.hasText(request.getParameter(targetUrlParameter)))) {
            requestCache.removeRequest(request, response)
            clearAuthenticationAttributes(request)
            return
        }

        clearAuthenticationAttributes(request)
    }

}