(function () {
  function initListManager() {
    const itemInput = document.getElementById('item-input');
    const addItemBtn = document.getElementById('add-item-btn');
    const itemList = document.getElementById('item-list');
    const itemCounter = document.getElementById('item-counter');

    function updateCount() {
      const count = itemList.children.length;
      itemCounter.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
    }

    function createListItem(text) {
      const li = document.createElement('li');
      const textSpan = document.createElement('span');
      textSpan.textContent = text;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.type = 'button';
      deleteBtn.addEventListener('click', () => {
        li.remove();
        updateCount();
      });

      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      return li;
    }

    function handleAddItem() {
      const trimmed = itemInput.value.trim();
      if (!trimmed) {
        itemInput.focus();
        return;
      }

      const li = createListItem(trimmed);
      itemList.appendChild(li);
      itemInput.value = '';
      itemInput.focus();
      updateCount();
    }

    addItemBtn.addEventListener('click', handleAddItem);

    itemInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleAddItem();
      }
    });

    ['Review JavaScript Closures', 'Build UI Component Library', 'Optimize Array Pipeline'].forEach((item) => {
      itemList.appendChild(createListItem(item));
    });
    updateCount();
  }

  function initLiveFilter() {
    const searchInput = document.getElementById('search-input');
    const searchList = document.getElementById('search-list');
    const filterCount = document.getElementById('filter-count');
    const items = Array.from(searchList.querySelectorAll('.filter-item'));

    function applyFilter() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      items.forEach((item) => {
        const matches = item.textContent.toLowerCase().includes(query);
        if (matches) {
          item.classList.remove('hidden');
          visibleCount += 1;
        } else {
          item.classList.add('hidden');
        }
      });

      filterCount.textContent = `Showing ${visibleCount} of ${items.length}`;
    }

    searchInput.addEventListener('input', applyFilter);
    applyFilter();
  }

  function initFormValidation() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    const nameFeedback = document.getElementById('name-feedback');
    const emailFeedback = document.getElementById('email-feedback');
    const messageFeedback = document.getElementById('message-feedback');
    const statusBox = document.getElementById('form-status');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateName() {
      const val = nameInput.value.trim();
      if (val.length < 2) {
        nameInput.classList.add('input-error');
        nameInput.classList.remove('input-success');
        nameFeedback.textContent = 'Name must be at least 2 characters.';
        nameFeedback.className = 'feedback-msg error';
        return false;
      }
      nameInput.classList.remove('input-error');
      nameInput.classList.add('input-success');
      nameFeedback.textContent = 'Valid name.';
      nameFeedback.className = 'feedback-msg success';
      return true;
    }

    function validateEmail() {
      const val = emailInput.value.trim();
      if (!emailRegex.test(val)) {
        emailInput.classList.add('input-error');
        emailInput.classList.remove('input-success');
        emailFeedback.textContent = 'Enter a valid email address.';
        emailFeedback.className = 'feedback-msg error';
        return false;
      }
      emailInput.classList.remove('input-error');
      emailInput.classList.add('input-success');
      emailFeedback.textContent = 'Valid email address.';
      emailFeedback.className = 'feedback-msg success';
      return true;
    }

    function validateMessage() {
      const val = messageInput.value.trim();
      if (val.length < 10) {
        messageInput.classList.add('input-error');
        messageInput.classList.remove('input-success');
        messageFeedback.textContent = 'Message must be at least 10 characters.';
        messageFeedback.className = 'feedback-msg error';
        return false;
      }
      messageInput.classList.remove('input-error');
      messageInput.classList.add('input-success');
      messageFeedback.textContent = 'Valid message.';
      messageFeedback.className = 'feedback-msg success';
      return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        statusBox.textContent = 'Feedback submitted successfully! Thank you.';
        statusBox.className = 'status-box show success';
        form.reset();
        [nameInput, emailInput, messageInput].forEach((input) => {
          input.classList.remove('input-success', 'input-error');
        });
        [nameFeedback, emailFeedback, messageFeedback].forEach((fb) => {
          fb.textContent = '';
        });
      } else {
        statusBox.textContent = 'Please correct the highlighted fields before submitting.';
        statusBox.className = 'status-box show';
        statusBox.style.color = '#f87171';
        statusBox.style.backgroundColor = 'rgba(248, 113, 113, 0.12)';
        statusBox.style.border = '1px solid rgba(248, 113, 113, 0.35)';
      }
    });
  }

  function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('emerald-mode');
      const isEmerald = document.body.classList.contains('emerald-mode');
      toggleBtn.textContent = isEmerald ? 'Switch to Sky Accent' : 'Switch to Emerald Accent';
    });
  }

  function initConsoleRunner() {
    const runBtn = document.getElementById('run-exercises-btn');
    const clearBtn = document.getElementById('clear-console-btn');
    const outputBox = document.getElementById('console-output');

    clearBtn.addEventListener('click', () => {
      outputBox.textContent = 'Console output cleared.';
    });

    runBtn.addEventListener('click', () => {
      const logs = [];

      if (typeof squareEvenNumbers === 'function') {
        const evens = squareEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
        logs.push('=== Exercise 1: Array Filtering & Mapping ===');
        logs.push(`Input: [1, 2, 3, 4, 5, 6, 7, 8]`);
        logs.push(`Output: [${evens.join(', ')}]\n`);
      }

      if (typeof aggregateScores === 'function') {
        const agg = aggregateScores([85, 92, 78, 99, 88, 92]);
        logs.push('=== Exercise 2: Array Aggregation with reduce ===');
        logs.push(`Input: [85, 92, 78, 99, 88, 92]`);
        logs.push(`Result: ${JSON.stringify(agg)}\n`);
      }

      if (typeof deduplicateAndSort === 'function') {
        const deduped = deduplicateAndSort(['banana', 'Apple', 'BANANA', 'cherry', 'apple', 'date']);
        logs.push('=== Exercise 3: Array Deduplication & Sorting ===');
        logs.push(`Input: ['banana', 'Apple', 'BANANA', 'cherry', 'apple', 'date']`);
        logs.push(`Sorted Unique: [${deduped.map((s) => `'${s}'`).join(', ')}]\n`);
      }

      if (typeof createCounter === 'function') {
        const testCounter = createCounter(10);
        logs.push('=== Exercise 4: Higher-Order Function / Closure ===');
        logs.push(`Initial: ${testCounter.getValue()}`);
        logs.push(`Increment: ${testCounter.increment()}`);
        logs.push(`Increment: ${testCounter.increment()}`);
        logs.push(`Decrement: ${testCounter.decrement()}`);
        logs.push(`Reset: ${testCounter.reset()}\n`);
      }

      if (typeof isPalindrome === 'function') {
        logs.push('=== Exercise 5: Palindrome Checker ===');
        logs.push(`isPalindrome('Racecar') -> ${isPalindrome('Racecar')}`);
        logs.push(`isPalindrome('A man, a plan, a canal: Panama') -> ${isPalindrome('A man, a plan, a canal: Panama')}`);
        logs.push(`isPalindrome('Hello World') -> ${isPalindrome('Hello World')}\n`);
      }

      if (typeof summarizeTasks === 'function') {
        const sampleTasks = [
          { id: 1, title: 'Set up ESLint config', category: 'development', completed: true },
          { id: 2, title: 'Refactor state store', category: 'development', completed: false },
          { id: 3, title: 'Draft quarterly report', category: 'management', completed: true },
          { id: 4, title: 'Review PR #42', category: 'development', completed: false },
          { id: 5, title: 'Team sync meeting', category: 'meetings', completed: true }
        ];
        logs.push('=== Exercise 6: Object Transformation & Grouping ===');
        logs.push(JSON.stringify(summarizeTasks(sampleTasks), null, 2) + '\n');
      }

      if (typeof updateUserProfile === 'function') {
        const initialUser = {
          id: 'usr_101',
          name: 'Alex Rivera',
          preferences: { theme: 'dark', notifications: true }
        };
        const updated = updateUserProfile(initialUser, {
          preferences: { theme: 'slate' }
        });
        logs.push('=== Exercise 7: Deep Property Access & Immutability ===');
        logs.push(`Original Immutable: ${initialUser !== updated}`);
        logs.push(`Preferences Cloned: ${initialUser.preferences !== updated.preferences}`);
        logs.push(`Result: ${JSON.stringify(updated, null, 2)}`);
      }

      outputBox.textContent = logs.join('\n');
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initListManager();
        initLiveFilter();
        initFormValidation();
        initThemeToggle();
        initConsoleRunner();
      });
    } else {
      initListManager();
      initLiveFilter();
      initFormValidation();
      initThemeToggle();
      initConsoleRunner();
    }
  }
})();
