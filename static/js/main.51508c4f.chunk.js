(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{217:function(e,A,t){},218:function(e,A,t){},239:function(e,A,t){},463:function(e,A,t){},464:function(e,A,t){},465:function(e,A,t){},466:function(e,A,t){},467:function(e,A,t){},604:function(e,A,t){},606:function(e,A,t){},607:function(e,A,t){},608:function(e,A,t){},609:function(e,A,t){},610:function(e,A,t){"use strict";t.r(A);var s=t(0),n=t(2),c=t.n(n),i=t(45),a=t.n(i),l=(t(217),t(7)),r=t(9),o=t(13),j=function(e,A){if(!Array.isArray(e)||!e.length)return e;for(var t=[],s=0;s<Math.ceil(e.length/A);s++)t.push([]);for(var n=0,c=0;n<e.length;n++)0!==n&&n%A===0&&c++,t[c].push(e[n]);return t},b=t.p+"static/media/logo.099de4f5.svg",u=(t(218),function(){var e=Object(n.useState)(),A=Object(o.a)(e,2),t=A[0],c=A[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/general")).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),c(e)}))}),[]),t?Object(s.jsxs)("div",{className:"main-page",children:[Object(s.jsx)("div",{className:"school-animation",children:Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/MSIT_client/animations/school-animation.mp4",type:"video/mp4"})})}),Object(s.jsx)("div",{className:"content-container",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("img",{src:b,className:"logo"}),Object(s.jsx)(l.b,{to:"/about",className:"btn-enter",children:t.buttonValue}),Object(s.jsx)("p",{className:"slogan",dangerouslySetInnerHTML:{__html:t.slogan}})]})})]}):null}),m=t(202),d=t.p+"static/media/logoWithoutText.813a1dfd.svg",p=t.p+"static/media/about-us.c76cbc40.svg",f=t.p+"static/media/computer.7bd0fb10.png",h=t.p+"static/media/python.ee2c8992.png",x=t.p+"static/media/web-development.1a11ca6b.png",g=t.p+"static/media/robot.1678ea41.png",O=t.p+"static/media/online-marketing.97751cd7.png",y=(t(239),function(){return Object(s.jsxs)(m.slide,{right:!0,disableAutoFocus:!0,disableCloseOnEsc:!0,children:[Object(s.jsxs)(l.b,{to:"/",children:[Object(s.jsx)("img",{src:d}),"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"]}),Object(s.jsxs)(l.b,{to:"/about",children:[Object(s.jsx)("img",{src:p}),"\u041f\u0440\u043e \u043d\u0430\u0441"]}),Object(s.jsx)("span",{className:"sub-title",children:"\u041a\u0443\u0440\u0441\u0438"}),Object(s.jsxs)(l.b,{to:"/course/IT-start",children:[Object(s.jsx)("img",{src:f}),"IT start"]}),Object(s.jsxs)(l.b,{to:"/course/photoshop",children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAIM8AACDPAGwo/07AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAHlxJREFUeNrtnXtAFlXex+fhKqASgZegFLOU1V6pYJE1t0WL8tVKQ3TbKMFi84a1UIvWruKaqSnhZq3oW2Ipi6Fua+DSRuhqLeW111xvIaZoihUql1QQH2ZNu2hz5syZ55nreb7fP+dyznl+388zc+ZcBcEIhQ5Iy8rJXVJUunFHVW1TmwgR1dZUW7VjY2nRktycrLQBoQIH8o0anl1QWQdvXVFdZUH28Chfu3rvHTe1pKoVNrqr1qqSqXHeNjPfEZ1Z2gDvtFNDaWa0wy7uR01cg2e+Hm+ENROjrO9+zMJjsEo/HVsYY2X3I7L3wCO9tSc7wpruB6aUO2GPEXKWpwRartaXUNAIZ4xTY0GCleqEfukH4InROpDuZxH7AyYfgR1m6MjkAAvY3z77BKwwSyey25tsf8j0k7DBTJ2cHmKi/Z3moOZnfn1wTieT7PfJhP3WQCDTxwz/B+5C6K2iXQONf/ovQ6++hdS2zNj3gNeEUwi6tXRqgpdx/sduc6usLc0QUS1uhXVbrEH2d8xX3+bfsHXFtIzUpMT4vt1CfARIrl4d0q1vfGJSasa0FVvVj6dw5nc0pMO3WtXL6WBZ3riErvBWvbomjMsrO6iqqlVtQGdxRjN7efYvSg6Dke4pLHnRfvaIN0/SuTjBq1mLcmhpSjjs00bhKUsPscZ9dbAVHv+bJ0XCNm0VOWmz+a8Btsd/zaxe8EsP9ZpVY+prgOnxb7GRCpyJcdyNPq+BKIbHf6X1xirxpsCUSobXgA7Dh+OVh3pXDII/RmhQhaIVdfFaZzr0jFKeJf1hjVHqX6Lkxpmh2uaYqjDHy1kcDVuMVHSxQnNsa6qW2U1RaO4r7A1LjFbvQoVGwina1T0XWK43GhKUR2Qs0Oh7zLeImk1TFnp3TJJPVhPVmiJNppYHlVMzWRUBI8xTxCqqOeVBGvz/qf5XJcIEc5VYRSXA7WeAg/b8d870hwNmy38m7XugyN16AK3+V4uGH2s0DNXSaoL6ff9VdEHsraEuFXp9DaZSHv85Xoi8VeSVQ3kNuNEiNFS+/a92MMJuJQ2Wfw20utwqHC/f/r8ej3+rvQbWy/cLuNgzFCXf/7cYj3/rvQYWy/cNutQ7HCzf/z8D4baiZsiPD3BlhIjs+B/neMTamhovWxVcrT6xDNkhZ0mItFWVJDtoM0NtUjFySdXfiThbV3fWy/1tVY4Vlq0AHO+HKFtZ/Y5rUw2QqwAc74EYW1s9jmtRDZCrANTj/2/9Z0C9+9UAuQpAM97/dqgHNLtbDegoUwFwov5vj28Bma/BatbZ4/kyzxB8/9ulPUDGwHy222OdaP+zuWTaBJ1Ma4h4yaz/shhxtY9k+gW2sfThTJDp/0P/j43kJdM3OEH51k7k9b9q0f9rK3Uhjw84pbya3DLy2wPjP2ymweSa3DKl+waS5xvlIKJ2Uw55Fp/CLC4f8myjClQA7FcNII8U3UWfx5WJCgDv1YBMag2QuACJE+P/balBxGpAI60eOIfIzEzE0p6aSbRzjvwNIcQHQBXmf9lU/sR5g43ye4xMJxKD+Z+2VSLR0Olyl7cn7v+zCnG0r4izx0/K7TSVTVz/AfP/bawI4goS2eSLA4j7v2UhinZWFsnTE+T9Bie70G4AWVzklr3JpEv9jrjQcghZXcS2/SOkXWfTSagUIoJ2VyHJ13TpdQ7S/s9OrP9ne/UmtQcekK4ck0ACpRjxs7+KSc4mSC4rIF2G9V85UDTJ2YKfXhVIagUuQfR4EGll6cafruufQsIE639zof4kb1N+chFpOcgKxI4PkYaGlF99SQSpqohhAJxoEOkD7+omflI3QCUix4sqFTsE9jC8JSDbilTD23PlBTEs9UTItiJ+4105WXghy5ciZF+RWnkWXnH+GFNbEWRbkdp5j/14Ooq0/yf2f+RIDtKeoz8uHzmRcHYWosaTZhEsnvjD2TWEs9j/lyv1Ili85ofnA2FR4M2IGV8i7D1e9/1bntRdNAkh40uTKJ29pAmBkQgZX4qkTBMslZ46hIjxpkNSl0svn/FukJ5aioDxpqVSlxu8L52JQz+AJ4jUHxB36cxUwplwBIw3hRNsnnrpDGHE0H7Eiz/tlxvzR5hDvAjh4k+LCDP/vz3uS9gbLhnh4k/JhB3lvt1amNAT1BaGcPGnsDZyf9Bw6eGDiBaPOih1erhAHA5YhmDxqDLywEDCYJE8BItH5ZGHfRFGjI5DsHjUOPLI7zqMBvMQEcaF1QlCKKGBqCuCxaO6EqwOFQYQ+ggQKz5F6PUbIKRJD25FqPjUVqnXaaRlpFYgVHxqBWkROMKy8tMQKj41jbQRRK4GO01D9hBhQ9hcYYn0YCpCxadSpV4vEYqkB7FBKKdKknpdRBoRiuXBOVUiaVzoRunBeISKT8VLvd4o7JAe7ItQ8am+Uq93kAaEdUOo+FQ30qAwwtZSIZrmekO8bup/W1S3sEDMY2dVCGFDOIGwo4C2K8TPFfXWuZNHtxXPfSKxpy88psqHsB+IIB0o1iLYDIAfdKHmn9MGB8FoWbVIh38K0jA22xaAyyNdt/05+Tp4TVSzNFz8AXBJO7NvgN2eDMDFZ9sH40LhuAcDcFHnS4fjC8GTAbioT5OBgEcDIIq7f+0F4z0ZAFHc9zCeAh4NgCj+60Z479EAiN88iYeARwMgih/cDPs9GgDxbCb892gARLHQDwB4NADiv64BAB4NgLinOwDwaADE2hgA4NEAiN/cBQA8GgCx8TYA4NEAiLWRAMCjARD3hwIAjwZA/CgAAHg0AOJaLwDg0QCIzwEAzwbgfCwA8GgAxP2BAMAKAHw2wh09+NiU+W+s2/J5owsELAIAVgBAo80J/SNuTXlle6sqAoYBAH4AuKyAX86uZgfgRCcAwBkA3yp2fg0rAUsBAIcACILXqO1sADhvBQA8AnBRd1ewDQ8BAJwCIAhDPmchYAQA4BUAIfBFhm+CKl8AwCsAgtBvnzIBmQCAXwCEjusUATjVAQDwC4DgNRePAI8GQBDSnAoAHPYGADwDIIxXegSMBgBcA0DaE/EqbQEAfAMgzFYg4A4AwDcAjn/SAXgbAPANgNC5lt4jcD0A4BsA4S76p8DTAIBzAIQ5VAC2AgDeAQg8SiWgJwDgHADhNxgi7tkAkPZH/1G7AAD3AMS20QjoAwB4B0AoowEwAwBwD8A91LmiAIB7AIQ9FABa2wMA7gF4gvYIGAIAuAcg4DQFgLkAgHsAhDfRJ+zZADxAAeBCRwDAPQDtmjBR1KMBEN5CJcCzARhFAaAMAPAPQAQFgBoAwD8AwpcUAjoAAP4BoA0OjAcA/ANAGxiUDgD4B2A0BYAFAIB/AG6mAPA+AOAfAAdlNbljAIB/AIQP5cvR5gsA+AfgZco74HoAwD8AaRQAYgEA/wBEUwC4HwDwD4AvZY7YE3plGhR2w8394n415L47o7sHewEAMwEQGuQLkqNxVpFD06ct+vvmmpar65r1hz/d9M7y2aNucgAAEwCgTBHL1yyTdrGPL9xUr7QyScOmBWNu8QEAxgKwW74gazXJwHvAjEoVa5af27L4kRAAYJw+0nVuwA3j364XVat1w1ORAMAgUfoDd7qZtN+o95yiq9r5p9sBgBFaJV+Q/W4l3Dfva9E9HZnXDQDortcoCwa6kWxchaiBWt/qDwB01kvyBal1OdGov4laqTLZGwDoqRz5gpx2Mcnrl14QNdTeewGAjsqkfJG5lmL6N6LGeqcnANBNj1P6g11JL2ytqL1angMAeimZEnd/9ckNqRX10KsAQC/do+nA8NmiPooDAHppECXs7VSm5bVEJ/8/Qx1AN91NqQOo7J7zXamT/+IfAYBuulezr4B2pXr53xYJAHTTUK3aAbzW6eW/uAntAPrpfvmCHFeV0Czd/BcfBwD6aYR8QT5Xk05Sm27+nwsGAPppJKUNVkUyfZr0ewAUoylYR1FmB+5gTyW4Sj//dV+sxrMBoKwaXmmFCqAofukDAHTUI/IFWc+cyPM6+i++LAAAHTVGviDrWNN4sE1PAGIAgJ4aK1+QNYxJ3NSop/97BQCgp9LlC7KCMYm/q2zXO7h24QtTJ4158O7+fW6KuSs5/ZlZrxaWyc5PeBYA6Kpx8gV5jS2FgezeH3/vpbE/DyInc93w2RWEIeRtNwAAXTVRviCvsKWwmdH96lm3KCXliBpT9BM7NggAQFdNli/IPKYERjG5fzSXdbJ5aObeK29MAwD6irKT9EyW+/2qGezfOkhVz/Ivl5/7/s6zHQCAvvqzfEGYBuI9xdCS85jqeb8hT39XHSgSAIC+Wi1fkEyWNuA6xckdC1zqy7nu8pSlIQBAZ1Emh05guP1FJf8/7etqyYYdFsVabwCgs2rkCzKW4VF9TsH/j65xvWhBL13IEwCAvnKcly/IQ8q3P6rgf0WQW6W7vRcA0FldKO4xLBL1Nt3/tf6CDeTRAMRR7FNstxECztCndPkIAMDiAPyW0mYfoHj3CKr/taECALA6AIsojXfKd79JBcAu6wx6NAAfy5dDuRXe5yTN/6UCALA8AN6Ul/gSxbvvovlf0xEAWB+APhQHf69496s0AH4nAADrA5BCcXCE4t20fqDWzgDABgDkUixUbMOlNSKxDygEAGYCsJ7yFag4Obwz7Q0wGgDYAYBT8sU4onjzrRT/69sBABsAQNsz6j3Fu4dR7v63AABsAMCTFAuVF4untCKKKwGAHQB4j2LhYMW7cyh3vwgAbABAULN8Kc4HKt7+fxQAMgCADQB4QHSrFLQZoQ8AABsAQFvUa77y7Z9Qbh8EAGwAwFH3/sK0GSFjAYD1AehHm8B3rfL9tDmBMwGA9QF4lmLgbob78yn3FwIA6wPwb4qBLDuG0T4DPwIAlgfgOtqq/g8zJPAEbTgYALA8AC/Q+nJYJmXTviLFHgDA4gAE0cZzHWZJgTaiWMwFABYHIINm33KWFG6gpXA6CABYGgD/z2n2/YYlCT/qmOBxAMDSAEynmXeebULvbtHND0kAYBoAPamzOt9nS4S+PvSDAMDCALxL9W4SWyKx1EQafgYALAvAH+mTOllX5jpKXxXqWgBgUQBG0Zf2ZF4l+hU6Rxt8AYAlAYg7SzduGmtCdyksD7AYAFgRgDsb6LY5I1lT8jmlQMDSQABgOQAeUFrW5V32tJYrLRG0py8AsBgA6Yo7O49gT2yYUlri2ccBgJUA6Py2omXH1Kzr8aFicuJfOwAAywAw+mtlw55Xk2Asw1YBxyf5AQBLABC2Stkt0dldVZrLGZIUa9J9AID5ACR9yWLWKnWJXn+GJVGx+hEvAGAuAKFFTE45+6hM908im/aOcgAA8wAInvIlm09/VZty0DFGAsSd9wMAkwAIn9fAaNIF9WtzponM2nIPADAeAL97ClqYLVqmPn2v99gJED8Y4gUAjASgc9rf1Gzq2uLKWM4On6rIQTw66yYAYAQAXjcNf7Zwp1NUpekuZRVxVF0um9KCAAClJW6ue8pdXPjO+i37zonqtcvF/tv/aVCZUdPrdwAA6+lCrKs/5+7zqjP7bGo4ALCY5rn+e1Jd4e0fI/0AgIX0WYAbPyjHpSzrFv/KCwBYRKfc254jz8Vsv8iLAwBW0PkEN3/SMy7vIV79wi0AwHSluf2bUs67nvt//tATAJiqFzT4UXe7tY/81swIAGCaXtGkq+62WrcK4dw4NggAmKG232v0s3r8x82SNL3+CwBguFoe0ux3tXvF7dLse6YLADBUpxO0/GXDvnS7QK1r7/cBAIZpr8ZD97uUaVCo2rm9AIAxr/+XNV/Z3/FksxYl+9CoGqFHA/BFoh4hjSrVpHCN87sCAH31VohOQb3r/zUp37m/dAcA+umwjhv7eI09pkkZzy/rBQD0UX22vvv6BM34RpNyOot7AgAd+n5e1n9r55DMKk3KevZpbwCgsdYYMzLTce87Ti2Ku+UWAKChvsk3sPu1++yvtGiszPEFABrps6eCBUPlO2TZafeLvSsWAGhRoyq514wpen7D3qx3u9YyFgC4qa9XPmZSl/tF+T9Q2Ohm+ec6AIDrL9ENU2PMnp7bbsTKJrd+xNuBAMCV5t71i36XaJG5OAEji8+48VO2hwMAJl2o/2L/9o3r3no956Hb2wvWUuDoNWddh/k2/gHY0s5tWXtNHkFo/9Dfz7lIQGMM9wBsFjxBHVLeca3T+KubAQAnCh6zrsUFAg5dBwC40TVj31U/mWDXNQCAI4VlbFFLwAftAABX6v1CjToC3vEGAHzJkfCmqlfB8wCAO13/kopWwtZbAQCHNcLn2KcUfOIDADhUu/HMy009BwC4VMB0xoGEzT8DAHwq/E22hSY+9gIAnCr2QyYCMgEAt5rA0l3YEAQAuFUfltVn0wEAv/JfoFwT2A4AeNaQE4oExAIAntVTsU3gNQDAtW48ojTBpSMA4Fo9lDoJJwIAvhV5WGFoCADg/S2gMJekFwDgXE/RAXgUAHAu7x1UAF4FALwrlrq+wDYAwL0WUmcM+wMA3tWBurZAPADgXm/QAHgKAHCv+2gAFAEA7uVH25TwIADgXytojwA/AMC9htMA6AwAuFcAbWxIbwDAv77W9zsQAFhdtI2IhgAA/vU+BYDfAAD+tVzfMSEAQEv5+Guf5jx95wgCANecDg6/+dY77nnw0fFPT3/x1TdWl23avu/oqRZxpfZZZVEAmA8ATNEXskt8HdY+s2cpALwOAEwRZbjmdZpnlk8BYAUAMEXb5cufpHlm6ygALAYApoiyOeQ8zTPbRQEgFwCYIkon/YeaZ0YbEjIDAJiiF+XLf07rhck70DqDngYApmiMvp5cpf40AB4HAKboFoonxzVuC3qVBsAvAYA5zUC05d4naJpVO+qo0DAAYI62Ukw57KNlTik0/78SAIA5WkyzJU3LnDbQctoEAEzSQzRbqjtql1HPNr3nhgEAVxRMXdx5nWaL+AnF1MmBIwGAWaqgGjNfq2wmU7NxhgAAs/QkfeJ2qja5xNE3ldkqAACz1ENhLd8BWmRyrcIiMbMBgHmqpHtzop/7WTjKFBYJugMAmKdRCuacdftjsMMahSz2CQDAPHkrbvTzmnubO0XtVcogEwCYqWcUl/L85EY3kh+puNl4cygAMFPXKG/yc9rl4UHeLyomLhYKAMBUPa/skfjBQJeSvmebctJttwEAcxV0jIEA8R/qfRq4kSXhtwQAYLIeZfFJbCtWN4X39jKmZFtvBgBmy8G46+uFtb8OZEzSf8Ratj2DtBgPDADcVbxTZFRT4VDlUQK+Q5c3MCcYDgAsoBdEdtXlj+hOSSr8vtdPqUhNu2FHAMAN+VSKqnRy/fyHf/bTvmLvPg/PK/9KXUIVDgBgCXU/LapWS+2+j99duWj2H+fmryyr3C0/z1Bejd0FAGANjRTN0G8FAGAVzTHB/78KAMA6esNw/7e0AwBWqgj+w2D/v9B2BjoAcFeBHxvq/9kYAQBYS6GfGOj/+fsFAGA1ddxgnP8jBABgPfn/zSj/HxQAgBXlvcQQ/1tHCgDAovrDBf39b7xPAACW1aDjevtf3VcAABZWl/f19b/iWgEAWFpe0/V8DSz0EQCA1fXzrXrZf/h/9SozANBSjt9+rYf9zgVBAgCwh67Nd2ru/86f61hgAKC1+q3Utipw4DEfAQDYSj3+clYz+/c94q1vYQGAHur0fJ0m9n8y2kvvopoCwI0Jsrpd4EN+D7zl7mPgRF60AQU1BQDPUIdH/+l6baB51TAfQ0oJAPRUaNIru11wf1fe0CCjiggA9Fbn0fk72Yd+t+4ueLiLkcUDAEbIOyp5xpr9rXTva8tzx9zqb3TRAIBx8uoSPSTt2ZeLyzZ89Mnez4+f/LLms0+3bHpv7WvPT0z6RWQ7cwoFADxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8FQLpWYQsCxauku9K0CYR1sH0QKT7lI/W6SaiVHgxBqPhUCKFbWqiSHuyGUPGpblKvq4Qd0oN9ESo+1Vfq9Q6BsF59PELFp+KlXm8USqUHExEqPpUo9bpUKJIeTEKo+FSS1OsigbDgTSpCxadSpV4vEXKlBzMQKj6VIfU6V8iRHpyGUPGpaVKvc4Qs6cEVCBWfWiH1OktIkx7cilDxKcKiNmnCAOnBBoSKTxG2qRoghBLmLXVFrHhUV4LVoYJAWN0gAcHiUQlSp+suHiZshjUOweJR46ROV148XCA9nIdg8ag8qdMFFw9nSw+XIVg8irBRcfbFw8Olhw8iWDzqoNTp4RcPR0kPt4UhWvwpjLBVddTF476EtSySES7+lExYo8b32xOEQWGLEC7+tIg0IOxblUhP7Ee4+NN+qc8ll05MJTQQhSNevCmcYPPUS2fiCGdSEDDelEKwOe7SGW9CH8FSBIw3LSX0+n23NjVhXOghBIw3HSKNCL2sTMLDIRIR40uRBJMzvzsXTTg3CSHjS5MIJn+/QLmjjtel/KEftJnQF+z4/uQaAh29EDOe1Itg8Zofzk4knJ2FoPGkWQSLJ/5wltAfJNY4EDV+5KgRyT1B3+mYiHFhXIswGkw8dsX5hSJ5sAjEiQpI+9NecT6GtH95IOLGiwIbCQbHXHnFHvQH8CxSP8Ceq64gDAy8NGIU4kKEkd+XhgP+qAjSJriDEDk+NIi0R3XE1deUE66pQOj4UAXB3HKGt4TYH7HjQf1FhhoesZ5YguDxoBKmbzzSl6IYjejZX6TOXkIrD6mtSCxG+OyvYpGpnddxgFRV7I342V29SR94Bwg9PekkUAoRQLurkORrOuFCvyOEC9sGIoL21kDChDDxiB/p0snEzc2xdryt5bOL5Opk4rUBJ0jXZiGIdlYWydMTAeSLSR0CYlMEomhfRTSJit0AP6r9SdLVqxBG+2oVydGT7eUun066HIuH21eJREOny14fQmoPFqv8EUl7yr+K5GcjZUugOURiZiKU9tRMop1zKHd0Ij4CnBgYYEsNchIfAJ1o92QSmantgmjaT11qiWZmutBuIFZ4IZ52k1eF6ErLHrHl8Ntl5SGbKYdopHLb/jLifc7BiKi9NJhYARCXKd7Y6RSqAfxWAE51Ur51AvFOcT2qAXaqAKwnuziB5d5t5HsXI6z20WKyh9uY/sWx5LeHOANxtYtmkB10xrLdnk++XRyPyNpD42UMzGe8v2O1DEDYUtQWSpJ5hFd3ZE0hppmcQvOdiK71daecezHsaWTIPEPq+yG+Vle/ehnzVG0Iu1omkeM9EGFrq8dxGetWq0omuFqOADwDrP3/l/O/OlhdQnLVALEe9QArv//lnv9qKgD0aoDYjG8B69b/5f62ruwIL1cNEJ1oD7Dq979T1KQCoFANQJugRTVD1jC1FYDLiqqTTXAxeoYsJ6/FsnbVRbmWZPwZ2STXo3fYYuqyXtasM/GuJjq0VTbRWowQsZQG18pa1TrU9WRTZVMVnTl4DVjn8Z/jlHcq1Z2Up8inK1bgNWCVx38FxaYp7qW9gJJ0LeYLWEKDaikmLXAzcUcRJXHnTMwaM13+MymPf7HI7VX/fcspyYtVmDlqshKraP6U+7qfQxCVAHEV1g8wURGrqOaUB2mRiW8RNZOmLKwiY5J8spqo1hT5apOPYwE1G3EXVpIyRQN30X1ZoN2uP1PoObUVYj1Bw9W7sI3uyhQtc0ttpWfmLMaqsoYquthJd6Q1VdsMh54RFVSCtcUNU/8SJTfODNU6z/g6pTzFCjQMGdPwU6FoRV289tlGVStmK1amYKcpnRWYUqnsQ3WUHlkHr1bOWWwsSMCOk7rJkVDQyGDC6mCd8s9oZshdrJmFfYd1Ua9ZNSzxb9Zx5/eYapFJmydFwi9tFTlpM1vsq2P0LAbTa+CSDi1NCYdt2ig8Zekh1rjr9vhX9xq4rP2LksNgn3sKS160nz3iej7+1b4GvmskPFiWNy6hK4xUr64J4/LKDrapiba+j//v1THfKapVw9YV0zJSkxLj+3YLQd+RrHxCuvWNT0xKzZi2YmuD6iA78zsaVM7YbaI7ammGiGpxK6zbYo0j1WvCKRGylE5NMHaQbqdlbQi6ddS2rJPh7yul3mjIOJkzIsMnsxGht4IaM82qV3eaAwTMt39OJxO/W0Kmn4QFZurk9BCTP13bZ5+ADWbpRHZ7C7ReBEw+AivM0JHJARZpwPJLPwA7jNaBdD/7jVSAtKr5WXDcTWBKuRPOGCFnuVVH3kVk74E9emtPtqUn48UsPAaP9NOxhTGC5RU1cU0drNJedWsmRgk2kSM6s7QBlmmnhtLMaLuNtvaOm1pS1Qrv3FVrVcnUOG+7DnHxjRqeXVCJN4Jrz/zKguzhUb4CBwodkJaVk7ukqHTjjqraJowkkFFbU23Vjo2lRUtyc7LSBoQaYs1/AYPuu7aVAvoMAAAAAElFTkSuQmCC"}),"Photoshop"]}),Object(s.jsxs)(l.b,{to:"/course/python",children:[Object(s.jsx)("img",{src:h}),"Python"]}),Object(s.jsxs)(l.b,{to:"/course/web-development",children:[Object(s.jsx)("img",{src:x}),"\u0412\u0435\u0431-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430"]}),Object(s.jsxs)(l.b,{to:"/course/robotics",children:[Object(s.jsx)("img",{src:g}),"\u0420\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0456\u043a\u0430"]}),Object(s.jsxs)(l.b,{to:"/course/internet-marketing",children:[Object(s.jsx)("img",{src:O}),"\u0406\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"]})]})}),v=t(203),w=t.n(v),T=function(){return Object(s.jsx)(w.a,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:-10},params:{particles:{number:{value:50}}}})},B=t(204),N=t.n(B),D=(t(463),function(e){var A=e.title,t=e.description;return Object(s.jsx)("section",{className:"introduction",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h1",{children:A}),Object(s.jsx)("p",{children:Object(s.jsx)(N.a,{strings:[t],typeSpeed:1})})]})})}),I=(t(464),function(e){var A=e.title,t=e.items;return Object(s.jsxs)("section",{className:"list",children:[Object(s.jsx)("h1",{children:A}),Object(s.jsx)("table",{className:"items",children:Object(s.jsx)("tbody",{children:t.map((function(e,A){return Object(s.jsx)("tr",{children:e.map((function(e,A){return Object(s.jsxs)("td",{className:"item",children:[Object(s.jsx)("span",{className:"index",children:e.sequence_number}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("span",{className:"item-title",dangerouslySetInnerHTML:{__html:e.title}}),Object(s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]})]},A)}))},A)}))})})]})}),C=(t(465),function(e){var A=e.title,t=e.items,n=e.tableImage;return Object(s.jsxs)("section",{className:"table",children:[Object(s.jsxs)("div",{className:"head",children:[Object(s.jsx)("img",{src:n}),Object(s.jsx)("span",{children:A})]}),Object(s.jsx)("div",{className:"body",children:Object(s.jsx)("table",{className:"items",children:Object(s.jsx)("tbody",{children:t.map((function(e,A){return Object(s.jsx)("tr",{children:e.map((function(e,A){return Object(s.jsx)("td",{className:"item",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("span",{className:"item-title",dangerouslySetInnerHTML:{__html:e.title}}),Object(s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text}})]})},A)}))},A)}))})})})]})}),F=(t(466),function(e){var A=e.text;return Object(s.jsx)("div",{className:"additional-text",dangerouslySetInnerHTML:{__html:A}})}),Q=t(211),q=t(205),S=t.n(q),E=t(206),H=t.n(E),V=(t(467),H()(S.a)),k=function(e,A,t,n){V.fire(Object(Q.a)({showCloseButton:!0,focusConfirm:!1,allowEscapeKey:!1,html:Object(s.jsx)("div",{style:A,children:e})},t)).then((function(e){n&&n(e)}))},U=t(62),Y=[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40},{visibility:"off"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7f8d89"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#7f8d89"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b3638"},{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2b3638"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.icon",stylers:[{visibility:"off"}]}],W=Object(U.withScriptjs)(Object(U.withGoogleMap)((function(){return Object(s.jsx)(U.GoogleMap,{defaultZoom:15,defaultCenter:{lat:49.28823054546794,lng:23.429325546713372},defaultOptions:{styles:Y},children:Object(s.jsx)(U.Marker,{position:{lat:49.28823054546794,lng:23.429325546713372},icon:{url:"/logoWithoutText.svg",scaledSize:new window.google.maps.Size(36,36)}})})}))),L=t.p+"static/media/facebook.8d5fdeca.svg",K=t.p+"static/media/instagram.7fc9f580.svg",R=t.p+"static/media/telegram.bf5e9205.svg",z=(t(604),function(){var e=Object(n.useState)(),A=Object(o.a)(e,2),t=A[0],c=A[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/general")).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),c(e)}))}),[]),t?Object(s.jsxs)("footer",{children:[Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{src:d,className:"logo"})}),Object(s.jsxs)("div",{className:"contacts",children:[Object(s.jsxs)("div",{className:"contact-info",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{href:t.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{className:"icon",src:L})}),Object(s.jsx)("a",{href:t.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{className:"icon",src:K})}),Object(s.jsx)("a",{href:t.telegram,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{className:"icon",src:R})})]}),Object(s.jsxs)("p",{className:"telephones",children:[t.phone_number_1,Object(s.jsx)("br",{}),t.phone_number_2]})]}),Object(s.jsx)("span",{className:"map",onClick:function(){return k(Object(s.jsx)(W,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(s.jsx)("div",{style:{height:"100%"}}),containerElement:Object(s.jsx)("div",{style:{height:"100%"}}),mapElement:Object(s.jsx)("div",{style:{height:"100%"}})}),{width:"100%",height:"60vh",background:"silver"})},children:"\u042f\u043a \u0434\u043e\u0431\u0440\u0430\u0442\u0438\u0441\u044c"})]})]}):null}),G=t(210),P=t(209),M=t.n(P),J=(t(606),function(){return Object(s.jsx)("button",{className:"btn-enter",onClick:function(){return k(Object(s.jsxs)("form",{className:"course-registration-form",children:[Object(s.jsx)("input",{name:"name",type:"text",className:"swal2-input",placeholder:"\u0406\u043c'\u044f *"}),Object(s.jsx)(M.a,{name:"telephone",mask:"+(3\\80) 99 99 99 999",className:"swal2-input",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d *"}),Object(s.jsx)("textarea",{name:"question",className:"swal2-textarea",placeholder:"\u0412\u0430\u0448\u0435 \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f *"})]}),null,{preConfirm:function(){for(var e=Object(G.a)(document.querySelector(".course-registration-form").elements),A=!0,t=0;t<e.length;t++){if(!e[t].value){V.showValidationMessage("\u041f\u043e\u043b\u0435&nbsp;<b>".concat(e[t].placeholder.slice(0,-2),"</b>&nbsp;\u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c.")),A=!1;break}if("telephone"===e[t].name&&e[t].value.includes("_")){V.showValidationMessage("\u041f\u043e\u043b\u0435&nbsp;<b>".concat(e[t].placeholder.slice(0,-2),"</b>&nbsp;\u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043d\u0435 \u0432\u0441\u0456 \u0446\u0438\u0444\u0440\u0438, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.")),A=!1;break}}if(A)return fetch("https://api.github.com/users").then((function(e){if(!e.ok)throw new Error("[".concat(e.status,"]: ").concat(e.statusText));return e.ok})).catch((function(e){k(null,null,{icon:"error",title:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",showConfirmButton:!1})}))},showLoaderOnConfirm:!0},(function(e){e.isConfirmed&&e.value&&k(null,null,{icon:"success",title:"\u0412\u0430\u0448 \u0437\u0430\u043f\u0438\u0442 \u0431\u0443\u043b\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e.",showConfirmButton:!1})}))},children:"\u041f\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443"})}),X=t.p+"static/media/certificate.2ceb8e34.svg",_=(t(607),function(){var e=Object(n.useState)(),A=Object(o.a)(e,2),t=A[0],c=A[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/general")).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),c(e)}))}),[]),t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"about-page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/MSIT_client/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:t.label,description:t.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:t.list.name,items:t.list_items}),Object(s.jsx)(C,{title:t.table.name,items:t.table_items,tableImage:X}),Object(s.jsx)(F,{text:t.additional_text}),Object(s.jsx)(J,{}),Object(s.jsx)(z,{})]})]}):null}),Z=(t(608),function(){return Object(s.jsxs)("div",{className:"teacher-info",children:[Object(s.jsx)("img",{src:"https://www.mts.am/images/default-source/default-album/1240x770_e-teacher.jpg"}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h2",{children:"\u0406\u0432\u0430\u043d\u043e\u0432 \u041e\u043b\u0435\u0433 \u0412\u0430\u0441\u0438\u043b\u044c\u043e\u0432\u0438\u0447"}),Object(s.jsx)("p",{children:'Lorem Ipsum - \u044d\u0442\u043e \u0442\u0435\u043a\u0441\u0442-"\u0440\u044b\u0431\u0430", \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0432 \u043f\u0435\u0447\u0430\u0442\u0438 \u0438 \u0432\u044d\u0431-\u0434\u0438\u0437\u0430\u0439\u043d\u0435. Lorem Ipsum \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 "\u0440\u044b\u0431\u043e\u0439" \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043d\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435 \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 XVI \u0432\u0435\u043a\u0430. \u0412 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043d\u0435\u043a\u0438\u0439 \u0431\u0435\u0437\u044b\u043c\u044f\u043d\u043d\u044b\u0439 \u043f\u0435\u0447\u0430\u0442\u043d\u0438\u043a \u0441\u043e\u0437\u0434\u0430\u043b \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u0438 \u0444\u043e\u0440\u043c \u0448\u0440\u0438\u0444\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f Lorem Ipsum \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u043a\u0438 \u043e\u0431\u0440\u0430\u0437\u0446\u043e\u0432. Lorem Ipsum \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0435\u0440\u0435\u0436\u0438\u043b \u0431\u0435\u0437 \u0437\u0430\u043c\u0435\u0442\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u044f\u0442\u044c \u0432\u0435\u043a\u043e\u0432, \u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u0448\u0430\u0433\u043d\u0443\u043b \u0432 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d.'})]})]})}),$=t.p+"static/media/clipboard-list-outline.200edccb.svg",ee=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},Ae=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/MSIT_client/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},te=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},se=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},ne=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},ce=function(){var e=Object(r.f)(),A=e.pathname.slice(e.pathname.lastIndexOf("/")+1),t=Object(n.useState)(),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("".concat("https://8b62a88f9de8.ngrok.io/api","/course/").concat(A)).then((function(e){return e.json()})).then((function(e){e.list_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.table_items.sort((function(e,A){return e.sequence_number-A.sequence_number})),e.list_items=j(e.list_items,2),e.table_items=j(e.table_items,3),a(e)}))}),[]),i?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"about-animation",children:[Object(s.jsx)("video",{autoPlay:!0,loop:!0,pleload:"auto",muted:!0,children:Object(s.jsx)("source",{src:"/MSIT_client/animations/about.mp4",type:"video/mp4"})}),Object(s.jsx)(D,{title:i.label,description:i.description})]}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{title:i.list.name,items:i.list_items}),Object(s.jsx)(C,{title:i.table.name,items:i.table_items,tableImage:$}),Object(s.jsx)(Z,{}),Object(s.jsx)(F,{text:i.additional_text}),Object(s.jsx)(z,{})]})]}):null},ie=function(){return Object(s.jsxs)("div",{children:["Not Found",Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/",children:"Return to root page."})]})},ae=(t(609),function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(r.c,{children:[Object(s.jsx)(r.a,{exact:!0,path:"/",children:Object(s.jsx)(u,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/about",children:Object(s.jsx)(_,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/IT-start",children:Object(s.jsx)(ee,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/photoshop",children:Object(s.jsx)(Ae,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/python",children:Object(s.jsx)(te,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/web-development",children:Object(s.jsx)(se,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/robotics",children:Object(s.jsx)(ne,{})}),Object(s.jsx)(r.a,{exact:!0,path:"/course/internet-marketing",children:Object(s.jsx)(ce,{})}),Object(s.jsx)(r.a,{path:"*",children:Object(s.jsx)(ie,{})})]})})})}),le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,611)).then((function(A){var t=A.getCLS,s=A.getFID,n=A.getFCP,c=A.getLCP,i=A.getTTFB;t(e),s(e),n(e),c(e),i(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(ae,{})}),document.getElementById("root")),le()}},[[610,1,2]]]);
//# sourceMappingURL=main.51508c4f.chunk.js.map