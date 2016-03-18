Tinytest.add("merge", function(assert) {
    var a = { a: "foo" }
    var b = { b: "bar" }

    test.ok(extend(a, b), { a: "foo", b: "bar" })
})

Tinytest.add("replace", function(assert) {
    var a = { a: "foo" }
    var b = { a: "bar" }

    test.ok(extend(a, b), { a: "bar" })
})

Tinytest.add("undefined", function(assert) {
    var a = { a: undefined }
    var b = { b: "foo" }

    test.ok(extend(a, b), { a: undefined, b: "foo" })
    test.ok(extend(b, a), { a: undefined, b: "foo" })
})

Tinytest.add("handle 0", function(assert) {
    var a = { a: "default" }
    var b = { a: 0 }

    test.ok(extend(a, b), { a: 0 })
    test.ok(extend(b, a), { a: "default" })
})

Tinytest.add("is immutable", function (assert) {
    var record = {}

    extend(record, { foo: "bar" })
    test.ok(record.foo, undefined)
})

Tinytest.add("null as argument", function (assert) {
    var a = { foo: "bar" }
    var b = null
    var c = void 0

    test.ok(extend(b, a, c), { foo: "bar" })
})

Tinytest.add("null prototype", function(assert) {
    var a = { a: "foo" }
    var b = Object.create(null)
    b.b = "bar";

    test.ok(extend(a, b), { a: "foo", b: "bar" })
})
