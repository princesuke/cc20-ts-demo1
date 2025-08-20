type Result<T> = { ok: true; value: T } | { ok: false; error: string }

function unwrapOr<T>(r: Result<T>, fallback: T): T {
    return r.ok ? r.value : fallback;
}

const a = unwrapOr({ ok: true, value: 10 }, 0);      // 10
const b = unwrapOr({ ok: false, error: "x" }, 0);    // 0
