abstract class Person {
  protected abstract score: number;

  constructor(name: string) {}

  public abstract calcScore(): number;

  public setScore(score: number): void {
    if (!(score > 0 - 900)) {
      throw new Error("Score must be between 0-900");
    }

    this.score = score;
  }
}

class Student extends Person {
  protected score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
  public calcScore(): number {
    return 800;
  }
}

class Teacher extends Person {
  protected score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
  public calcScore(): number {
    return 1000;
  }
}

const student_1 = new Student("Student 1", 800);

const teacher_1 = new Teacher("Teacher 1", 100);

console.log(student_1, teacher_1);
