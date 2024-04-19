QUnit.module('fizzBuzz', function() {
    QUnit.test('Létezik-e', assert => {
      assert.ok(fizzBuzz);
    });
    QUnit.test('Függvény-e', assert => {
        assert.ok(typeof(fizzBuzz) === 'function')
      });

    QUnit.test('3-mal és 5-tel osztható', assert => {
        assert.ok(fizzBuzz(15));
    });
    QUnit.test('csak 3-mal osztható', assert => {
        assert.ok(fizzBuzz(9));
    });
    QUnit.test('csak 5-tel osztható', assert => {
        assert.ok(fizzBuzz(5));
    });
    QUnit.test('tört', assert => {
        assert.ok(fizzBuzz(1.5));
    });
    QUnit.test('Egyikkel se osztható', assert => {
        assert.ok(fizzBuzz(26));
    });
    QUnit.test('szöveg', assert => {
        assert.ok(fizzBuzz("Kutya"));
    });

  });