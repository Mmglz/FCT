package com.nttdatacenters.patrondisenio.singleton;

public class PersonSingleton {

	private static PersonSingleton INSTANCE;

	private String name;

	private int age;

	public PersonSingleton() {
		super();
	}

	private PersonSingleton(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public static PersonSingleton getInstance(String name, int age) {
		if (INSTANCE == null) {
			INSTANCE = new PersonSingleton(name, age);
		}
		return INSTANCE;
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
}
