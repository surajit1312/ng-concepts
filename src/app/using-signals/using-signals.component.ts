import { Component, OnInit, computed, effect, signal } from '@angular/core';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-using-signals',
  templateUrl: './using-signals.component.html',
})
export class UsingSignalsComponent implements OnInit {
  title = signal('');
  users = signal<UserInterface[]>([]);
  titleChangeEffect = effect(() => {
    console.log('Title changed : ', this.title());
    console.log('Users changed : ', this.users());
  });
  usersTotal = computed(() => this.users().length);

  ngOnInit(): void {
    setTimeout(() => {
      this.users.set([{ id: '343434', name: 'John Doe' }]);
    }, 5000);
  }

  onTitleChange(event: KeyboardEvent): void {
    if (event) {
      const value = (event.target as HTMLInputElement).value;
      this.title.set(value);
    }
  }

  onAddUserUsingUpdate(): void {
    this.users.update((prevVal) => [
      ...prevVal,
      { id: '2e23e32', name: 'Marry Greens' },
    ]);
  }

  onAddUserUsingMutate(): void {
    this.users.mutate((users) => {
      users.push({ id: 'regreg', name: 'Naomi Paul' });
    });
  }
}
