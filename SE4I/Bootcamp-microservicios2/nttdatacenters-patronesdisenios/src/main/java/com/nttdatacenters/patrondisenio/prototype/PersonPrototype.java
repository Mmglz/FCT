package com.nttdatacenters.patrondisenio.prototype;

public class PersonPrototype implements Cloneable {

	private String name;

	private int age;

	public PersonPrototype(String name, int age) {
		this.name = name;
		this.age = age;
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

	public PersonPrototype clone() {
		return new PersonPrototype(name, age);
	}

}
