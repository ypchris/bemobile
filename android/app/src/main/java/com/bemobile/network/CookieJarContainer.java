package com.bemobile.network;

import okhttp3.CookieJar;

public interface CookieJarContainer extends CookieJar {

  void setCookieJar(CookieJar cookieJar);

  void removeCookieJar();

}
