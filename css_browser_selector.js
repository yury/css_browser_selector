/*
CSS Browser Selector v0.3.2
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u) {
    var ua = u.toLowerCase(),
            is=function(t) {
                return ua.indexOf(t) >- 1;
            },
            gecko_='gecko',
            webkit_='webkit',
            safari_='safari',
            konqueror_='konqueror',
            chrome_='chrome',
            freebsd_='freebsd',
            mac_='mac',
            linux_='linux',
            iphone_='iphone',
            ipod_='ipod',
            webtv_='webtv',
            win_='win',
            h=document.getElementsByTagName('html')[0],
            b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1):
               is('firefox/3') ? is('firefox/3.5') ? gecko_ + ' ff3 ff3_5' : gecko_ + ' ff3 ff3_0':
               is('firefox/2') ? gecko_ + ' ff2':
               is('gecko/')    ? gecko_ :
               /opera(\s|\/)(\d+)/.test(ua) ? 'opera opera' + RegExp.$2:
               is(konqueror_) ? konqueror_:
               is(chrome_) ? webkit_ + ' ' + chrome_:
               is('applewebkit/') ? webkit_ + ' ' + safari_ + (/version\/(\d+)/.test(ua) ?
                                                   ' ' + safari_ + RegExp.$1:'') :
               is('mozilla/') ? gecko_ :
               '',
               is('j2me') ? 'mobile':
               is(iphone_) ? iphone_:
               is(ipod_) ? ipod_:
               is(mac_) ? mac_:
               is('darwin') ? mac_:
               is(webtv_) ? webtv_:
               is(win_) ? win_:
               is(freebsd_) ? freebsd_:
               (is('x11')||is(linux_)) ? linux_: '',
                'js'
            ],
    class_ = b.join(' ');
    h.className += ' ' + class_;
    return class_;
};
css_browser_selector(navigator.userAgent);
