export class Message {
  public Name: string;
  public Email: string;
  public Telephone: string;
  public Message: string;
  public _id: string;

  constructor(name, email, telephone, message) {
    this.Name = name;
    this.Email = email;
    this.Telephone = telephone;
    this.Message = message;
  }
}
