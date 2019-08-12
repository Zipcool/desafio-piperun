<template>
    <div class="login-column">
        <h1>Login</h1>
        <form class="login-form" @submit.prevent="login">
            <input type="email" name="email" placeholder="Email" v-model="email" required>
            <input type="password" name="password" placeholder="Senha" v-model="password" required>
            <styled-submit-button>Entrar</styled-submit-button>
        </form>
    </div>
</template>

<script>
import StyledSubmitButton from '../shared/buttons/StyledSubmitButton';

export default {
    components: {
        StyledSubmitButton
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    created() {
        if(this.$store.getters.isUserLogged) {
            this.redirectToActivities();
        }
    },
    methods: {
        login() {
            const userInfo = {
                email: this.email,
                password: this.password
            }

            this.$http.post('auth?email=' + encodeURI(userInfo.email) + '&password=' + encodeURI(userInfo.password))
                .then(res => {
                    userInfo.idToken = res.body.data.me.token;

                    this.$store.dispatch('login', userInfo)
                        .then(res => res ? this.redirectToActivities() : false);
                })
                .catch(err => console.log(err));
        },
        redirectToActivities() {
            console.log('Redirecionando para a página de atividades...');
            this.$router.replace('/atividades');
        }
    }
}
</script>

<style scoped>
.login-column {
    margin: 0 auto;
    text-align: center;
}
.login-column h1 {
    user-select: none;
}

.login-form input {
    width: 200px;
    margin: 10px auto;
    padding: 2px;
    display: block;
}

.login-form a {
    display: block;
    padding: 1em 0;
    width: 208px;
    background-color: rgb(217, 63, 63);
    color: white;
    text-decoration: none;
    margin: 20px auto;
    cursor: pointer;
    user-select: none;
}
.login-form a:hover,
.login-form a:active {
    background-color: rgb(197, 50, 50);
}
</style>
