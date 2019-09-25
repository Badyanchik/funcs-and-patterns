const logable = fields => {
  function Logable (data) {
    this.values = data;
  }

  for (const key in fields) {
    Object.defineProperty(Logable.prototype, key, {
      get () {
        console.log('reading key: ', key);
        return this.values[key];
      },
      set (val) {
        const def = fields[key];
        const valid = (
          typeof val === def.type && def.validate(val)
        )
        if (valid) this.values[key] = val;
        else {
          console.log('not valid: ', key, val);
        }
      },
    })
  }
}
