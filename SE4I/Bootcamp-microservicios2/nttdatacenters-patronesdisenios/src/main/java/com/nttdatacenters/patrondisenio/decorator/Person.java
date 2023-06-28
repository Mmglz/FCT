package com.nttdatacenters.patrondisenio.decorator;

public class Person implements PersonInterface {

	private String name;

	private int age;

	public Person() {
		super();
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;

	}

	@Override
	public int getAge() {
		return age;
	}

	@Override
	public void setAge(int age) {
		this.age = age;

	}

}
