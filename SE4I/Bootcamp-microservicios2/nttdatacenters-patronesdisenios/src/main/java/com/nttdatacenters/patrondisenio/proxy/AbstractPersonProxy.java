package com.nttdatacenters.patrondisenio.proxy;

public abstract class AbstractPersonProxy implements PersonaProxyInterface{

	private PersonaProxyInterface p;
	
	public AbstractPersonProxy(PersonaProxyInterface p) {
		this.p = p;
	}
	
	@Override
	public void operacion() {
		before();
		System.out.println("Operacion");
		p.operacion();
		after();
	}
	
	public abstract void before();
	
	public abstract void after();

}
