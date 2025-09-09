import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger';
import { DonationsController } from './donations/donations.controller';
import { DonationsService } from './donations/donations.service';
import { EntryticketsController } from './entrytickets/entrytickets.controller';
import { EntryticketsService } from './entrytickets/entrytickets.service';
import { GamesController } from './games/games.controller';
import { PlatformsController } from './platforms/platforms.controller';
import { PrizesController } from './prizes/prizes.controller';
import { TeamsController } from './teams/teams.controller';
import { TournamentsController } from './tournaments/tournaments.controller';
import { TransactionsController } from './transactions/transactions.controller';
import { UsersController } from './users/users.controller';
import { VideogamesController } from './videogames/videogames.controller';
import { VideogametypesController } from './videogamestypes/videogametypes.controller';
import { GamesService } from './games/games.service';
import { PlatformsService } from './platforms/platforms.service';
import { PrizesService } from './prizes/prizes.service';
import { TeamsService } from './teams/teams.service';
import { TournamentService } from './tournaments/tournaments.service';
import { UsersService } from './users/users.service';
import { VideogamesService } from './videogames/videogames.service';
import { VideogametypesService } from './videogamestypes/videogametypes.service';

@Module({
	imports: [],
	controllers: [
		DonationsController,
		EntryticketsController,
		GamesController,
		PlatformsController,
		PrizesController,
		TeamsController,
		TournamentsController,
		TransactionsController,
		UsersController,
		VideogamesController,
		VideogametypesController
	],
	providers: [
		DonationsService,
		EntryticketsService,
		GamesService,
		PlatformsService,
		PrizesService,
		TeamsService,
		TournamentService,
		UsersService,
		VideogamesService,
		VideogametypesService
	],
})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.forRoutes({
				path: '*',
				method: RequestMethod.ALL,
			});
	}
}
