package com.nttdata.bootcamp.servlet;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.nttdata.bootcamp.autoconfigure.ProyectoPruebasApplication;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ProyectoPruebasApplication.class);
	}

}
