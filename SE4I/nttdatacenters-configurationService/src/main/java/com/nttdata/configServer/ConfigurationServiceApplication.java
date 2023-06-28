package com.nttdata.configServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

/**
 * Método principal
 * 
 * @author Manoli
 *
 */
@EnableConfigServer
@SpringBootApplication
public class ConfigurationServiceApplication {

	/**
	 * Clase principal
	 * 
	 * @param args
	 */
  public static void main(String[] args) {
    SpringApplication.run(ConfigurationServiceApplication.class, args);
  }
}
