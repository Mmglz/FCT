package com.nttdatacenters.patrondisenio.config;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import com.nttdatacenters.patrondisenio.prototype.PersonPrototype;
import com.nttdatacenters.patrondisenio.singleton.PersonSingleton;

@Configuration
public class Config {

	@Bean(name = "personPrototype")
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	public PersonPrototype prototipePerson() {
		return new PersonPrototype(null, 0);
	}

	@Bean(name = "personSingleton")
	@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
	public PersonSingleton singletonPerson() {
		return new PersonSingleton();
	}

}
