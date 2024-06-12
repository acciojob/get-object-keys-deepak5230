        const student = {
            name: 'John Doe',
            age: 20,
            major: 'Computer Science'
        };

        // Add getKeys method to Object.prototype
        Object.prototype.getKeys = function() {
            return Object.keys(this);
        };

        // Use the getKeys method
        const studentKeys = student.getKeys();
        console.log(studentKeys); // Output: ['name', 'age', 'major']
    
