class SimpleMembership {
  constructor (name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor (name) {
    this.name = name;
    this.cost = 200;
  }
}

class PremiumMembership {
  constructor (name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    return new Membership(name);
  }
}

const membershipFactory = new MemberFactory();
 
const members = [
  membershipFactory.create('simple'),
  membershipFactory.create('standard'),
  membershipFactory.create('premium'),
]
