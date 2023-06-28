package com.nttdatacenters.patrondisenio.facade;

public class FacadePerson {

	private PersonF estudiante;

	public FacadePerson(String name) {
		estudiante = new PersonF();
		estudiante.setAge(18);
		estudiante.setName(name);
	}

	@Override
	public String toString() {
		return "FacadePerson [estudiante=" + estudiante + "]";
	}
}
