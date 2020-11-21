class Animal {
    constructor(data) {
      this.id = data.id
      this.name = data.name
      this.gender = data.gender
      this.species = data.species
    }
  
    render() {
      return `
      <tr>
        <td contenteditable="true" class="name-field" data-id="${this.id}">${this.name}</td>
        <td>${this.gender}</td>
        <td>${this.species.name}</td>
      </tr>
      `
    }
  }
  