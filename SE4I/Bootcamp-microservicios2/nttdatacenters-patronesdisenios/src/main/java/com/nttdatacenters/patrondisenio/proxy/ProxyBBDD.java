package com.nttdatacenters.patrondisenio.proxy;

public class ProxyBBDD extends AbstractPersonProxy{
	

	public ProxyBBDD(PersonaProxyInterface p) {
		super(p);
	}

	@Override
	public void before() {
		System.out.println("Antes");
		
	}

	@Override
	public void after() {
		System.out.println("Despues");
		
	}

}
