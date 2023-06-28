package com.nttdatacenters.patrondisenio.facade;

public class PersonF {

	private String name;

	private int age;

	public PersonF() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "PersonF [name=" + name + ", age=" + age + "]";
	}
	
	
}
