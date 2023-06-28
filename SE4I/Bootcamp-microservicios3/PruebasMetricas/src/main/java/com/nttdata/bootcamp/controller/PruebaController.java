package com.nttdata.bootcamp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;

@RestController
public class PruebaController {

	private Counter counter;

	public PruebaController(MeterRegistry registry) {
		this.counter = Counter.builder("invocaciones.hello").description("Invocaciones totales").register(registry);
	}

	@GetMapping(path = "/helloWorld")
	public String helloWorld() {
		counter.increment();
		return "hello World";
	}

}
