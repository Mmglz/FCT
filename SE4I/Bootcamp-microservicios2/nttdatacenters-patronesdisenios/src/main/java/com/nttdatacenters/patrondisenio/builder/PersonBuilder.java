package com.nttdatacenters.patrondisenio.builder;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class PersonBuilder {

	private String name;

	private int age;

}
