interface Profile {
  name: string;
  age: number;
  address: string;
}

type ProfileDraft = Partial<Profile>;

const draft: ProfileDraft = {
    name: "John"
}