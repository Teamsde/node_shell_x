const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'93c11d02-2b03-442b-90d3-3f6a0331ae39'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
