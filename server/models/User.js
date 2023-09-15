const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
        },
        password: {
            type: String, 
            required: true,
            minlength: 5,
        },
        farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
        money: { type: Number, default: 0}
    },
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;