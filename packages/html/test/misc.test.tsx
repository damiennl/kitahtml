/// <reference path="../htmx.d.ts" />

import assert from 'node:assert';
import test, { describe } from 'node:test';

describe('Miscellaneous', () => {
  test('Htmx properties', () => {
    assert.equal(
      //@ts-expect-error - should warn about invalid property
      <div
        //
        hx-boost
        hx-headers
      ></div>,
      '<div hx-boost hx-headers></div>'
    );

    assert.equal(<div hx-boost></div>, '<div hx-boost></div>');
    assert.equal(<div hx-target="find "></div>, '<div hx-target="find "></div>');
  });

  test('Primitive values', () => {
    assert.equal(
      <>
        {false}
        {null}
        {undefined}
        {0}
        {NaN}
        {true}
        {Infinity}
        {-Infinity}
        {123n}
      </>,
      <>
        <></>
        <></>
        <></>
        <>0</>
        <>NaN</>
        <></>
        <>Infinity</>
        <>-Infinity</>
        <>123</>
      </>
    );

    assert.equal(
      <>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{0}</div>
        <div>{NaN}</div>
        <div>{true}</div>
        <div>{Infinity}</div>
        <div>{-Infinity}</div>
        <div>{123n}</div>
      </>,
      <>
        <div></div>
        <div></div>
        <div></div>
        <div>0</div>
        <div>NaN</div>
        <div></div>
        <div>Infinity</div>
        <div>-Infinity</div>
        <div>123</div>
      </>
    );
  });

  test('Events', () => {
    assert.equal(
      '<div onclick="click" onmouseover="mouseover" ondrag="ondrag"></div>',
      <div onclick="click" onmouseover="mouseover" ondrag="ondrag"></div>
    );

    assert.equal(
      '<form onfocus="focus"><input onblur="blur"/></form>',
      <form onfocus="focus">
        <input onblur="blur"></input>
      </form>
    );

    assert.equal(
      '<video onabort="abort" onseeking="seeking"></video>',
      <video onabort="abort" onseeking="seeking"></video>
    );
  });
});
