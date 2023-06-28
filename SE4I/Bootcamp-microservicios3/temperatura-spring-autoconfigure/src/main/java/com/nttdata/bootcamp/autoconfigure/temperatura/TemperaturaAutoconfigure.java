package com.nttdata.bootcamp.autoconfigure.temperatura;

import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nttdata.bootcamp.temperaturagrados.domain.Temperatura;

@Configuration
@ConditionalOnClass(Temperatura.class)
@EnableConfigurationProperties(TemperaturaProperties.class)
public class TemperaturaAutoconfigure {

	private final TemperaturaProperties properties;

	public TemperaturaAutoconfigure(TemperaturaProperties properties) {
		this.properties = properties;
	}
	
	@Bean
	public Temperatura convert() {
		return new Temperatura(properties.getDegrees());
	}
	
}
