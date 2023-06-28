package com.nttdata.bootcamp.configserverbootcamp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ConfigServerBootcampApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigServerBootcampApplication.class, args);
	}

}
