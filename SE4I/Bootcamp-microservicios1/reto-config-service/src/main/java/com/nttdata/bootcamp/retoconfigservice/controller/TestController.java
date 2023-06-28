package com.nttdata.bootcamp.retoconfigservice.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@Value("${product.description}")
	private String description;
	
	@Value("${product.code_product}")
	private String code;

	@GetMapping(path = "/productDescription")
	public String myProductDescription() {
		return this.description;
	}

	@GetMapping(path = "/productCode")
	public String myProductCode() {
		return this.code;
	}
}
